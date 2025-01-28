export type Note = {
  title: string;
  created_at: Date;
  body: string;
  userId: string;
  id: number;
};

export type Event = {
  start: Date;
  id: number;
  end: Date;
  title: string;
  userId: string;
  description: string;
};
