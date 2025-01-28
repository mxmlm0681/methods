import Character from "../app";

test('Ранение персонажа', () => {
  const character = new Character('Shaun', 'Zombie');
  const received = character.damage(50);
  expect(received.health).toBe(70);
});

test('Смерть персонажа, Health не уходит в минус', () => {
  const character = new Character('Shaun', 'Zombie');
  const received = character.damage(180);
  expect(received.health).toBe(0);
});

test('Вызов без параметров не меняет health', () => {
  const character = new Character('Shaun', 'Zombie');
  const received = character.damage();
  expect(received.health).toBe(100);
});


