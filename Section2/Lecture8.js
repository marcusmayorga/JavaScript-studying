/*
CONCEPTUAL ASIDE

Name/Value Pairs - A name which maps to a unique value

The name may be defined more than once, but only can have one value in any given context.

That value may be more name/value pairs.

*/

Address = '100 Main St.'


/*

Objects - A collection of name value pairs

The simplest definition when talking about JavaScript

*/

const Address =
  {
    Street: 'Main',
    Number: 100,
    Apartment:
    {
      Floor: 3,
      Number: 301
    }
  }