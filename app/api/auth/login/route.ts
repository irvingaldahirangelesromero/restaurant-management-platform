import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    
    const body = await req.json(); 

    const {correo, password } = body;

    const [usr] = await db.select().from(users).where(
        eq(users.email, correo)
    );
    
    if (!usr) return new Response("El usuario no existe", { status: 404 });

    const ok = await compare(password, usr.password);
    if (!ok) return new Response("Contraseña incorrecta", { status: 401 });

    return Response.json({ ok: true });
}
