import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EmptyStarSvg } from '../../assets/icon/empty-star.svg';
import { ReactComponent as FillStarSvg } from '../../assets/icon/fill-star.svg';

interface PerfumeReviewInfo {
  rate: number;
  brand: string;
  name: string;
  img: string;
}

const PerfumeReviewBoxContainer = styled.div`
  display: flex;
  background: var(--white-color);
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const StarRatingContainer = styled.div`
  display: flex;
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

const PerfumeBrand = styled.div`
  color: var(--black-color);
  font-size: 13px;
  font-weight: 400;
  padding: 10px 0px;
`;

const PerfumeName = styled.div`
  color: var(--black-color);
  font-size: 22px;
  font-weight: 600;
`;

const ImgBox = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PerfumeReviewBox({ rate, brand, name, img }: PerfumeReviewInfo) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        stars.push(<FillStarSvg alt="" key={i} />);
      } else {
        stars.push(<EmptyStarSvg alt="" key={i} />);
      }
    }

    return stars;
  };

  return (
    <PerfumeReviewBoxContainer>
      <TextInfoContainer>
        <StarRatingContainer>{renderStars()}</StarRatingContainer>
        <PerfumeBrand>{brand}</PerfumeBrand>
        <PerfumeName>{name}</PerfumeName>
      </TextInfoContainer>
      <ImgBox>
        <img src={img} />
      </ImgBox>
    </PerfumeReviewBoxContainer>
  );
}

export default PerfumeReviewBox;