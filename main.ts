import { Hono } from 'hono'
import { Plant } from "./models.ts";

const app = new Hono()

let plants: Plant[] = [];

app.get("/plants", (c) => c.json(plants));

app.post("/plants", async (c) => {
  const body = await c.req.json();
  const newPlant: Plant = { ...body, id: crypto.randomUUID(), lastWatered: new Date().toISOString() };
  plants.push(newPlant);
  return c.json(newPlant);
});

app.put("/plants/:id", async (c) => {
  const { id } = c.req.param();
  try {
    const updatedPlant = await c.req.json();
    plants = plants.map((plant) =>
      plant.id === id ? { ...plant, ...updatedPlant } : plant
    );
    return c.json({ message: "Plant updated" });
  } catch (error) {
    return c.json({ error: "Invalid or missing JSON data" }, 400);
  }
});

app.delete("/plants/:id", (c) => {
  const { id } = c.req.param();
  plants = plants.filter((plant) => plant.id !== id);
  return c.json({ message: "Plant deleted" });
});


Deno.serve({ port: 8000 }, app.fetch) 