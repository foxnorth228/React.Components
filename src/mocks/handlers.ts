import { rest } from 'msw';

export const handlers = [
  rest.get('https://the-one-api.dev/v2/character?name=//i', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          { name: 'name1', _id: 1 },
          { name: 'name2', _id: 2 },
          { name: 'name3', _id: 3 },
        ],
      })
    );
  }),
  rest.get('https://the-one-api.dev/v2/character?name=/gan/i', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: 1,
            birth: '',
            death: '',
            gender: '',
            hair: '',
            height: '',
            name: 'name1',
            race: '',
            realm: '',
            spouse: '',
            wikiUrl: '',
          },
        ],
      })
    );
  }),
  rest.get('https://the-one-api.dev/v2/character?name=name1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            _id: 1,
            birth: '',
            death: '',
            gender: '',
            hair: '',
            height: '',
            name: 'name1',
            race: '',
            realm: '',
            spouse: '',
            wikiUrl: '',
          },
        ],
      })
    );
  }),
];
