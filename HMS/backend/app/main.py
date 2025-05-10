# backend/app/main.py
from fastapi import FastAPI
from .routers import auth, chatbot, symptom, hospital
from .database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(auth.router)
app.include_router(chatbot.router)
app.include_router(symptom.router)
app.include_router(hospital.router)