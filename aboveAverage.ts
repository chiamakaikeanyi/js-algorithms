// Given an array of objects representing bears in a forest, each with a name and hunger level, 
// return the names of all bears whose hunger level is above the forest average, sorted alphabetically

type BearType = {
  name: string;
  hunger: number;
};

const hungryBears = (bears: BearType[]) => {
  const totalHungerLevel = bears.reduce((acc, val) => acc + val.hunger, 0);
  const bearSize = bears.length;
  const average = totalHungerLevel / bearSize;

  const aboveAverageBears = [];
  for (const bear of bears) {
    if (bear.hunger > average) {
      aboveAverageBears.push(bear.name);
    }
  }

  return aboveAverageBears.sort((a, b) => a.localeCompare(b));
};

// Test
const bears = [
  { name: "Baloo", hunger: 6 },
  { name: "Yogi", hunger: 9 },
  { name: "Paddington", hunger: 4 },
  { name: "Winnie", hunger: 10 },
  { name: "Chicago", hunger: 20 },
];

hungryBears(bears);
// > ['Chicago', 'Winnie']
