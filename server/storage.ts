import { type QuoteRequest, type InsertQuoteRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
}

export class MemStorage implements IStorage {
  private quoteRequests: Map<string, QuoteRequest>;

  constructor() {
    this.quoteRequests = new Map();
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      id,
      createdAt: new Date(),
      email: insertQuoteRequest.email || null,
      message: insertQuoteRequest.message || null,
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
