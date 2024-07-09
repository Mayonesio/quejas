import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Task from '@/models/Task.js';

export async function GET(request, { params }) {
    await connectDB();
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  }

 console.log(process.env.MONGODB_URI);
  export async function POST(request){
    const data = await request.json()
    const newTask = new Task(data)
   

    try {
        const savedTask = await newTask.save();
        console.log(savedTask);
        return NextResponse.json({
            message: "Tarea creada exitosamente",
            task: savedTask
        });
    } catch (error) {
        console.error('Error saving task:', error);
        return NextResponse.json({
            error: 'Error al crear la tarea'
        });
    }
}