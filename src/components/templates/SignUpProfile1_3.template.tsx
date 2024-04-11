import { useRecoilState } from 'recoil';

import Container from '@/components/atoms/Container';
import SignUpProfileStepTitleTemplate from '@/components/templates/SignUpProfileStepTitle.template';
import Typography from '@/components/atoms/Typography';
import {
  SignUpProfileDepositPriceAtom,
  SignUpProfileMonthlyPriceAtom,
} from '@/stores/sign.store';
import LabelDualInputRange from '@/components/organisms/LabelDualInputRange';

export default function SignUpProfile1_2Template() {
  const [depositPrice, setDepositPrice] = useRecoilState(
    SignUpProfileDepositPriceAtom,
  );
  const [monthlyPrice, setMonthlyPrice] = useRecoilState(
    SignUpProfileMonthlyPriceAtom,
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
        </Container.FlexCol>
      </Container.FlexCol>
    </Container.FlexCol>
  );
}