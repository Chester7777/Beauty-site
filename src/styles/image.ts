import styled from 'styled-components';

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(8, 8, 8, 0.1) 0%,
    rgba(8, 8, 8, 0.55) 100%
  );
  pointer-events: none;
`;
