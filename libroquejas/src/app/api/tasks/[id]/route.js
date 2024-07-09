import { NextResponse } from "next/server";
import {connectDB} from '@/utils/db';
import Task from '@/models/Task';

export function GET(request, { params }) {
  console.log(params);
  return NextResponse.json({
    message: `Obteniendo tarea ${params.id}...`,
  });
}

export function DELETE(request, { params }) {
  return NextResponse.json({
    message: `Eliminando tarea ${params.id}...`,
  });
}

export function PUT(request, { params }) {
  return NextResponse.json({
    message: `Editando tarea ${params.id}...`,
  });
}
