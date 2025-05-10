# backend/app/routers/chatbot.py
from fastapi import APIRouter

router = APIRouter()

@router.post("/chatbot")
def chatbot(message: dict):
    user_message = message.get("message", "")
    # Simple rule-based response
    if "fever" in user_message.lower():
        return {"response": "You might have an infection. Please consult a doctor if symptoms persist."}
    return {"response": "I'm here to help! Please describe your symptoms."}