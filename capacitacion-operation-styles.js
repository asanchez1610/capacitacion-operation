import { css, } from 'lit-element';


export default css`:host {
  display: block;
  box-sizing: border-box;
  @apply --capacitacion-operation; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: auto;
  align-content: center; }

.item {
  flex: 0 1 auto;
  margin: 2px;
  border: 1px solid #e1e1e1;
  padding: 5px 15px;
  font-size: 1.2rem;
  font-style: normal; }

.variables {
  padding: 5px 20px;
  background-color: #f4f4f4; }

.resultado {
  padding: 5px 20px;
  color: #fff;
  background-color: #006C6C; }

@media only screen and (max-width: 480px) {
  .item {
    font-size: 0.9em; } }
`;