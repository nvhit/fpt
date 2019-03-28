import React from 'react';
import RadioButtons from '../FormInputs/RadioButtons'

let listData = [
  {
    id: 0,
    question: 'Phuc la ai ?',
    answers: [
    {
      choice: 0,
      value: 'Trau' },
  
    {
      choice: 1,
      value: 'Chuot' },
  
    {
      choice: 2,
      value: 'Meo' }],
  
  
    correctAnswer: 1,
    explanation: 'Phuc la chuot' },
  
  {
    id: 1,
    question: 'Huy Che co map khong ?',
    answers: [
    {
      choice: 0,
      value: 'No ' },
  
    {
      choice: 1,
      value: 'Yes' }],
  
  
    correctAnswer: 1,
    explanation: 'Huy Che la heo' },
  
  {
    id: 2,
    question: 'Anh Tien la ai ?',
    answers: [
    {
      choice: 0,
      value: 'Bug' },
  
    {
      choice: 1,
      value: 'Not bug' }],
  
  
    correctAnswer: 0,
    explanation: 'Not bug not value' },

  
  {
    id: 3,
    question: 'Hung dep trai khong ?',
    answers: [
    {
      choice: 0,
      value: 'Yes' },
  
    {
      choice: 1,
      value: 'No' }],
  
  
    correctAnswer: 1,
    explanation: 'no , dm' }];
  

const InputTest = () => (
  
  <div className="col-md-12">
         <ul>
          {
            listData.map(function(){
              return <RadioButtons 
                question
              /> 
            })
          }
        </ul> 
  </div>
);
export default InputTest;




