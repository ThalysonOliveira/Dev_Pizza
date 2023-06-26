type Context = {
  userId: string;
};

type Headers = {
  authorization: string;
};

type Req = {
  headers: Headers;
};

type Requester = {
  req: Req;
};

export { Context, Requester };
