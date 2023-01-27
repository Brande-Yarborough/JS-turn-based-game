// character template

// const char = {
//     this.name =  name,
//     this.hp = hp,
//     this.moves = moves {
//         off = {
//             //offensive moves
//             moveName: dmgValue
//         },
//         def = {
//             //defensive moves
//             defName: healOrBlockValue
//         }
//     }
// }

const player = {
  name: "Thy hero!",
  type: "Knight",
  hp: 99,
  moves: {
    off: {
      strike: 10,
      pummel: 15,
    },
    def: {
      heal: 10,
    },
  },
};

const monsters = {
  goblin: {
    name: "Goblin",
    type: "Monster",
    hp: 10,
    moves: {
      off: {
        strike: 10,
        pummel: 15,
      },
      def: {
        heal: 10,
      },
    },
  },
  moblin: {
    name: "Moblin",
    type: "Monster",
    hp: 15,
    moves: {
      off: {
        strike: 10,
        pummel: 15,
      },
      def: {
        heal: 10,
      },
    },
  },
  trex: {
    name: "Trex",
    type: "Monster",
    hp: 999,
    moves: {
      off: {
        strike: 100,
        pummel: 5,
        charge: 500,
      },
      def: {
        heal: 10,
      },
    },
  },
};
