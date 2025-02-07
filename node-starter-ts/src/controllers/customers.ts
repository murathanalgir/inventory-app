import { Request, Response } from "express";
import { db } from "@/db/db";

export async function createCustomer(req: Request, res: Response) {
  const { name, email, phone } = req.body;
  try {
    const newCustomer = await db.customer.create({
      data: { name, email, phone },
    });
    return res.status(201).json(newCustomer);
  } catch (error) {
    console.log(error);
  }
}

export async function getCustomers(req: Request, res: Response) {
  const customers = [
    { name: "John Doe", email: "john@mail.com", phone: "+123456789" },
  ];
  return res.status(200).json(customers);
}
export async function getCustomersv2(req: Request, res: Response) {
  const customers = [
    {
      name: "John Doe",
      email: "john@mail.com",
      phone: "+123456789",
      version: "test",
    },
  ];
  return res.status(200).json(customers);
}
