import React, {Component} from 'react';
import './ProgressTracker.css';
import StudentProgress from './StudentProgress';







//   Stepper {
//     /* position: relative; */
//     display: table; 
//     width: 100%;
//     table-layout: fixed; 
    
//     border-style: solid 1px black;
//   }
  
//   .Stepper__step {
//     position: relative; 
//     display: table-cell;
//     text-align: center;
//     padding: 0.5rem;
    
//   }
  
//   .Stepper__indicator {
//     position: relative; 
//     display: block;
//     z-index: 2;
//   }
  
//   .Stepper__label {
//     position: relative; 
//     display: block;
//     margin: 0.5rem 0;
//     color: #cfd7de;
//     z-index: 2;
//   }
  
//   .Stepper__info {
//     position: relative;
//     display: inline-block;
//     width: 2.5rem;
//     height: 2.5rem;
//     border: 1px solid #e3e8ec;
//     border-radius: 50%;
//     background-color: #e3e8ec;
//     font-size: 1.25rem;
//     line-height: 2.5rem;
//     text-align: center;
//     color: #fff;
//     z-index: 2;
//   }
  
//   .Stepper__panel {
//     display: none;
//   }
  
//   .Stepper .Stepper__step:after {
//     content: " ";
//     position: absolute; 
//     left: 50%;
//     top: 1.75rem;
//     width: 100%;
//     height: 0.125rem;
//     background-color: #e3e8ec;
//     z-index: 1;
//    }
//   .Stepper .Stepper__step:last-child:after {
//     display: none;
//   }
  
//   .Stepper--inline .Stepper__indicator,
//   .Stepper--inline .Stepper__label {
//     display: inline-block;
//     vertical-align: inherit;
//   }
//    .Stepper--inline .Stepper__label { 
//     text-align: left;
//     padding: 0 0.5rem;
//     background: #fff;
//   }
  
//   .Stepper--inline.Stepper--bottom .Stepper__label { 
//     vertical-align: middle;
//   }
//   .Stepper--inline.Stepper--bottom .Stepper__step:after { 
//     top: auto;
//     bottom: 1.75rem;
//   }
  
  
//   .Stepper--vertical .Stepper__step {
//     display: block;
//     text-align: left;
//   }
  
//   .Stepper--vertical .Stepper__label {
//     padding-left: 1rem;
//   }
  
//   .Stepper--vertical .Stepper__indicator,
//   .Stepper--vertical .Stepper__label {
//     display: table-cell;
//   }
  
//   .Stepper--vertical .Stepper__panel {
//     margin-left: 3.5rem;
//   }
  
  
//   .Stepper--vertical .Stepper__step:after {
//     content: " ";
//     position: absolute;
//     left: 1.75rem;
//     top: 2.5rem;
//     bottom: -0.5rem;
//     width: 0;
//     height: auto;
//     border-left: 0.125rem solid #e3e8ec;
//   }
  
//   .Stepper .Stepper__step.is-complete .Stepper__info {
//     border-color: #a6b6c3;
//     background-color: #a6b6c3;
//   }
//   .Stepper .Stepper__step.is-complete .Stepper__label {
//     color: #a6b6c3;
//   }
  
//   .Stepper .Stepper__step.is-active .Stepper__info {
//     border-color: #627c90;
//     background-color: #627c90;
//   }
//   .Stepper .Stepper__step.is-active .Stepper__label {
//     color: #627c90;
//   }
  
//   .Stepper .Stepper__step.is-warning .Stepper__info {
//     border-color: #f1c40f;
//     background-color: #f1c40f;
//   }
//   .Stepper .Stepper__step.is-warning .Stepper__label {
//     color: #f1c40f;
//   }
  
//   .Stepper .Stepper__step.is-error .Stepper__info {
//     border-color: #e95a4b;
//     background-color: #e95a4b;
//   }
//   .Stepper .Stepper__step.is-error .Stepper__label {
//     color: #e95a4b;
//   }
  
  
//   /* Demo styles */
//   * {
//       box-sizing: border-box;
//   }
//   body {
//       padding: 2rem;
//       font-size: 16px;
//     font-family: Helsana, Arial, sans-serif;
//   }
//   .Container {
//     position: relative;
//   /*   max-width: 800px; */
  
//     margin: 0 auto;
//     background: #fafafa;
//   }
//   .Container + .Container {
//     margin-top: 0.5rem;
//   }
  
//   svg {
//     vertical-align: middle;
//   }
  
  
  /* .stepper-container-horizontal {
      border: 1px;
      box-shadow: 0 0 10px pink;
      border-radius: 3px;
      margin: 0px 0 0px 0;
      padding: 30px;
      width: 75vw;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
  }
  
  .stepper-wrapper-horizontal {
      display: flex;
      justify-content: space-between;
  
  }
  
  .step-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 23%;
  }
  
  .step-number {
      border-radius: 80%;
      border: 1px solid grey;
      width: 20px;
      height: 20px;
      padding: 3px;
      text-align: center;
      margin-bottom: 1.2rem;
  }
  
  .divider-line {
      height: 1px;
      background-color: black;
      position: absolute;
      width: 70%;
      top: 20%; */
  