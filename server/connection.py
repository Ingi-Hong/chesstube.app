import app
from sqlalchemy_pagination import paginate
from sqlalchemy import String, create_engine, select
from sqlalchemy.orm import (DeclarativeBase, Mapped, Session, mapped_column,
                            relationship)

engine = create_engine(f"postgresql+psycopg2://{app.username}:{app.password}@{app.host}:{app.port}/{app.database}")

class Base(DeclarativeBase):
    pass

class Videos(Base):
    __tablename__ = "Videos"

    video_id: Mapped[int] = mapped_column(primary_key=True)
    creator_id: Mapped[str] = mapped_column()
    elo: Mapped[int] = mapped_column()
    opening_id: Mapped[int] = mapped_column()
    plays_as: Mapped[str] = mapped_column(String(7))
    video_link: Mapped[str] = mapped_column()

    def __repr__(self) -> str:
        return f"Video(id={self.video_id}, creator_id={self.creator_id}, elo={self.elo}, opening_id={self.opening_id}, plays_as={self.plays_as}, video_link={self.video_link}"
    
    def as_dict(self) -> dict: 
        dict_ = {}
        for key in self.__mapper__.c.keys():
            dict_[key] = getattr(self, key) 
        return dict_

class Creators(Base):
    __tablename__ = "Creators"

    creator_id: Mapped[int] = mapped_column(primary_key=True)
    creator_name: Mapped[str] = mapped_column(String(50))
    def __repr__(self) -> str:
        return f"Creator: {self.creator_name}, ID: {self.creator_id}"

    def as_dict(self) -> dict: 
        dict_ = {}
        for key in self.__mapper__.c.keys():
            dict_[key] = getattr(self, key) 
        return dict_

class Openings(Base): 
    __tablename__ = "Openings"

    opening_id: Mapped[int] = mapped_column(primary_key=True)
    opening: Mapped[str] = mapped_column()
    parent_id: Mapped[int] = mapped_column()

    def __repr__(self) -> str:
        return f"ID: {self.opening_id}, opening: {self.opening}, parent_id: {self.parent_id}"

    def as_dict(self) -> dict: 
        dict_ = {}
        for key in self.__mapper__.c.keys():
            dict_[key] = getattr(self, key) 
        return dict_

def retrieve_videos(parameters: dict) -> dict:
# {creators: [], elomin: [int], elomax: [int], plays_as: [A | B | W], openings: []}
    creator_list = parameters["creators"]
    elomin = parameters["elomin"]
    elomax = parameters["elomax"]
    plays_as = parameters["plays_as"]
    openings_list = parameters["openings"]

    # First, filter by creators 
    stmt = select(Videos).filter(Videos.creator_id.in_(creator_list))

    # Second, filter by min and maxes 
    stmt = stmt.filter(Videos.elo > elomin).filter(Videos.elo < elomax)

    # Third, filter by playing color
    if (plays_as == "B"):
        stmt = stmt.filter(Videos.plays_as==plays_as)
    elif (plays_as == "W"):
        stmt = stmt.filter(Videos.plays_as==plays_as)

    # Fourth, filter by openings 
    stmt = stmt.filter(Videos.opening_id.in_(openings_list)) 

    print(stmt)

    videos = []
    
    with Session(engine) as session:
        for row in session.execute(stmt):
            videos += [row[0].as_dict()]
    return {"videos":videos}

def retrieve_table(className) -> list: 
    statement = select(className)
    table = []
    with Session(engine) as session:
        for row in session.execute(statement):
            table += [row[0].as_dict()]
    return table