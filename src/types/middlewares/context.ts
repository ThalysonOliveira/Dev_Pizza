type Context = {
  userId: string;
};

type Headers = {
  authorization: string;
};

type Req = {
  headers: Headers;
  body: Body;
};

type Body = {
  operationName: string;
};

type Requester = {
  req: Req;
};

export { Context, Requester };
