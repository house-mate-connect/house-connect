import { useRecoilState } from 'recoil';

import Container from '@/components/atoms/Container';
import SignUpProfileStepTitleTemplate from '@/components/templates/SignUpProfileStepTitle.template';
import Typography from '@/components/atoms/Typography';
import { SignupProfileStateSelector } from '@/stores/sign.store';
import LabelDualInputRange from '@/components/organisms/LabelDualInputRange';
import FormItem from '@/components/molecules/FormItem';
import { SignUpProfileFormType } from '@/types/signUp.type';

export default function SignUpProfile1_3Template() {
  const [depositPrice, setDepositPrice] = useRecoilState(
    SignupProfileStateSelector('deposit_price'),
  );
  const [monthlyPrice, setMonthlyPrice] = useRecoilState(
    SignupProfileStateSelector('monthly_price'),
  );

  return (
    <Container.FlexCol className="min-w-full px-2">
      <Container.FlexCol>
        <SignUpProfileStepTitleTemplate step="1-3" title="내가 찾는 집은..." />
        <Container.FlexCol>
          <Typography.SubTitle1 className="text-brown">
            가격대는 이 정도가 적당해요
          </Typography.SubTitle1>
          <LabelDualInputRange
            label="보증금"
            className="mt-[52px] w-[480px]"
            min={0}
            max={10000}
            step={100}
            setRangeValue={setDepositPrice}
            rangeValue={depositPrice}
            category="price"
          />
          <FormItem.Hidden<Pick<SignUpProfileFormType, 'deposit_price'>>
            name="deposit_price"
            valueProp={depositPrice}
          />
          <LabelDualInputRange
            label="월세"
            className="mt-[68px] w-[480px]"
            min={0}
            max={500}
            step={10}
            setRangeValue={setMonthlyPrice}
            rangeValue={monthlyPrice}
            category="price"
          />
          <FormItem.Hidden<Pick<SignUpProfileFormType, 'monthly_price'>>
            name="monthly_price"
            valueProp={monthlyPrice}
          />
        </Container.FlexCol>
      </Container.FlexCol>
    </Container.FlexCol>
  );
}
