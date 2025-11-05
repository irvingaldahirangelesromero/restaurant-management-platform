import { hash } from "bcrypt";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";

export async function POST(req: Request) {

  const body = await req.json(); 

  const { nombre, apellido, correo, telefono, password } = body;

  const newpass = await hash(password, 10);

  await db.insert(users).values({
    name: nombre,
    lastname: apellido,
    email: correo,
    phone: telefono,
    password: newpass,
  });

  return Response.json({ ok: true });

}
