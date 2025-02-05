import React, { useState, useEffect, useMemo } from 'react';

const symbols = ['♥', '♦', '♣', '♠', '★', '☆', '■', '□'];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const generateCards = () => {
    const doubledSymbols = [...symbols, ...symbols];
    const shuffledCards = doubledSymbols.sort(() => Math.random() - 0.5);
    setCards(shuffledCards.map((symbol, index) => ({ id: index, symbol })));
  };

  useEffect(() => {
    generateCards();
  }, []);

  const handleCardClick = (id) => {
    if (disabled || flipped.includes(id) || matched.includes(id)) return;
    setFlipped([...flipped, id]);
    setMoves(moves + 1);
    setDisabled(true);

    if (flipped.length === 1) {
      const firstCard = cards.find(card => card.id === flipped[0]);
      const secondCard = cards.find(card => card.id === id);

      if (firstCard.symbol === secondCard.symbol) {
        setMatched([...matched, firstCard.id, secondCard.id]);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (matched.length === 8) {
      alert(`Вы выиграли за ${moves} ходов!`);
      generateCards();
      setMatched([]);
      setMoves(0);
    }
  }, [matched]);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 150px)', gap: '10px' }}>
        {cards.map(card => (
          <div
            key={card.id}
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: flipped.includes(card.id) || matched.includes(card.id) ? '#fff' : '#ccc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '24px',
              cursor: 'pointer',
              border: '1px solid #000',
            }}
            onClick={() => handleCardClick(card.id)}
          >
            {flipped.includes(card.id) || matched.includes(card.id) ? card.symbol : ''}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>Ходы: {moves}</p>
      </div>
    </div>
  );
};

export default MemoryGame;