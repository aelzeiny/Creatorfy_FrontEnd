import { useMutation } from '@apollo/client';
import Breadcrumb from '../../components/Breadcrumb';
import ShopDetailHeader from '../../components/ShopDetailHeader';
import { DIGG_REVIEW } from '../../graphql/mutations';

const EXAMPLE_REVIEW_ID = 1;

const ShopDetailHeaderPreview = () => {
  const [diggReview] = useMutation(DIGG_REVIEW);

  const onUpvote = (reviewId: number) => {
    diggReview({
      variables: {
        input: {
          id: reviewId,
          helpful: true,
          reviewType: 'SERVICE',
        },
      },
    });
  };

  return (
    <>
      <Breadcrumb
        links={[
          {
            text: '@SuperGirlKels',
            url: 'https://www.google.com/',
          },
          {
            text: 'Services',
          },
        ]}
        gravatarUrl="/creatorCardImage.jpg"
      />
      <ShopDetailHeader
        title="I will play One-on-one smash"
        onDigg={() => onUpvote(EXAMPLE_REVIEW_ID)}
        rating={4.5}
        reviewCount={64}
        creator="@SuperGirlKels"
        creatorShareUrl="https://www.google.com/"
        eventable
      />
    </>
  );
};

export default ShopDetailHeaderPreview;
