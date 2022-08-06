import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('todo追加入力箇所の初期表示テスト', () => {
  render(<App />);
  expect(screen.getByRole('button')).toHaveTextContent(/追加/i)
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('todo閲覧箇所の初期表示テスト', () => {
  render(<App />);
  const todo01 = screen.getByText(/最初/i);
  expect(todo01).toBeInTheDocument();
  const todo02 = screen.getByText(/次の/i);
  expect(todo02).toBeInTheDocument();
  // screen.getByRole('');
});

test('ボタンをクリックするとtodoが追加されるか', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  const listItem = screen.getAllByRole('listitem');
  userEvent.type(input, 'hoge');
  userEvent.click(button);
  const listItemAfterClicked = screen.getAllByRole('listitem');
  expect(listItemAfterClicked.length).toBeGreaterThan(listItem.length);
});
