export type Invoice = {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];

  clientName: string;
  clientEmail: string;
  clientAddress: string;
  senderAddress: string;

  description: string;
  items: string;
  paymentDue: string;
  paymentTerms: number;
  status: "draft" | "pending" | "paid";
  total: number;
};
