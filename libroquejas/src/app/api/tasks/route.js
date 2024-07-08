import {NextResponse} from 'next/server';

export function GET(){
    return NextResponse.json({
        message: "obtener",
    });
}


export function POST(){
    return NextResponse.json({
        message: "crear",
    });
}