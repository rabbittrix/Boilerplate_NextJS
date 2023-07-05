import styled from 'styled-components'

export const Wrapper = styled.div`
  /* padding: 4px;
  border: 1px solid #fff;
  border-radius: 20px;
  width: 32px;
  height: 32px;
  box-sizing: border-box; */

  display: flex;
	justify-content: space-around;
	align-content: center;
	align-items: center;
  margin-right: 20px;
  position: relative;
	/* min-height: 32px; */
	/* height: 32px;
	width: 32px; */
	/* background-image: linear-gradient(#111, #050505); */
	/* --img-url: url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&h=350&fit=crop&crop=faces); */

  

  &:hover {
    cursor: pointer;
    /* #9561EF, #607AC4, #60C4A9 */
  }
`

export const Icon = styled.div`
  background: #07208b; 
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const GradientWrapper = styled.div`
//   flex-shrink: 0;
// 	/* margin: 20px; */
// 	/* height: calc(32px + 6vw);
// 	width: calc(32px + 6vw); */
//   height: 32px;
//   width: 32px;
// 	border: 1px solid transparent;
// 	background-origin: border-box;
// 	background-clip: content-box, border-box;
// 	background-size: cover;
// 	box-sizing: border-box;
// 	/* box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5); */
//   border-radius: 50%;
// 	background-image: var(--img-url), linear-gradient(to bottom right, #ff3cac, #562b7c, #2b86c5);

//   &:hover {
//     /* padding: 1px; */
//     /* background-image: var(--img-url), linear-gradient(#2b86c5); */
//     border: 2px solid #2b86c5;
//   }

// `;


// #9561EF, #607AC4, #60C4A9
export const GradientWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid #60C4A9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 32px; 
  height: 32px;
  &:hover {
    border-width: 2px;
  }
`

// export const GradientWrapper = styled.div`
//     box-sizing: border-box;
//   /* margin: 1rem auto 2rem; */
//   /* padding: 2px; */
//   /* width: 80%; */
//   /* max-width: 25rem; */
//   background: linear-gradient(blue, blue), 
//               linear-gradient(to right, red, purple);
//   border: 4px solid transparent;
//   background-repeat: no-repeat;
//   background-origin: padding-box, border-box;

//   border-radius: 50%;
//   /* border-width: 2px; */
//   position: relative;

//   &::before {
//   content: "";
//   position: absolute;
//   top: -3px;
//   bottom: -3px;
//   left: -3px;
//   right: -3px;
//   border: 3px solid blue;
//   border-radius: 50%;
// }
// `;

export const Notification = styled.div`
  position: absolute;
    right: 4px;
    top: 4px;
    transform: translate(50%, -50%);
    align-items: center;
    display: flex;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    background-color: red;
    width: 14px;
    height: 14px;
    font-size: 10px;
    font-weight: 700;
    font-family: 'Space Grotesk';
`;