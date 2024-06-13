import { useRecoilState } from 'recoil';

import Container from '@/components/atoms/Container';
import SignUpProfileStepTitleTemplate from '@/components/templates/SignUpProfileStepTitle.template';
import Typography from '@/components/atoms/Typography';
import { SignupProfileStateSelector } from '@/stores/sign.store';
import { SignUpType } from '@/types/signUp.type';
import IconButton from '@/components/molecules/IconButton';
import Button from '@/components/atoms/Button';
import { ProfileFormValues } from '@/components/pages/SignUpProfile';
import FormItem from '@/components/molecules/FormItem';
import {
  genderDisplayData,
  mateNumberDisplayData,
} from '@/constants/signUpProfileData';

export default function SignUpProfile3_1Template() {
  const [gender, setGender] = useRecoilState(
    SignupProfileStateSelector('gender'),
  );
  const [matesNumber, setMatesNumber] = useRecoilState(
    SignupProfileStateSelector('mates_number'),
  );

  const onClickGenderType = (stateValue: SignUpType['gender']) =>
    setGender(stateValue);

  const onClickMateNumberType = (stateValue: SignUpType['mates_number']) =>
    setMatesNumber(stateValue);

  return (
    <Container.FlexCol className="min-w-full px-2">
      <Container.FlexCol>
        <SignUpProfileStepTitleTemplate
          step="3-1"
          title="내가 원하는 룸메이트는..."
        />
        <Typography.SubTitle1 className="text-brown">성별</Typography.SubTitle1>
        <Container.FlexRow
          style={{ width: `${(genderDisplayData.length / 4) * 100}%` }}
          className="mb-[4.25rem] mt-11 justify-start gap-x-6"
        >
          {genderDisplayData.map(({ displayValue, stateValue, iconType }) => (
            <IconButton.Outline
              key={displayValue}
              className="flex-1 gap-y-5 rounded-lg py-5"
              isActive={stateValue === gender}
              iconType={iconType}
              direction="top"
              onClick={() => onClickGenderType(stateValue)}
            >
              <Typography.P2 className="text-brown">
                {displayValue}
              </Typography.P2>
            </IconButton.Outline>
          ))}
          <FormItem.Hidden<Pick<ProfileFormValues, 'gender'>>
            name="gender"
            options={{
              required: '성별을 선택해주세요',
            }}
            defaultValue={gender}
            valueProp={gender}
          />
        </Container.FlexRow>
        <Typography.SubTitle1 className="text-brown">
          인원 수
        </Typography.SubTitle1>
        <Container.FlexRow
          className="mb-[4.25rem] mt-11 gap-x-6"
          style={{ width: `${(mateNumberDisplayData.length / 4) * 100}%` }}
        >
          {mateNumberDisplayData.map(({ displayValue, stateValue }) => (
            <Button.Outline
              key={displayValue}
              className="flex-1 gap-y-5 rounded-lg py-5"
              isActive={stateValue === matesNumber}
              onClick={() => onClickMateNumberType(stateValue)}
            >
              <Typography.P2 className="flex-1 text-brown">
                {displayValue}
              </Typography.P2>
            </Button.Outline>
          ))}
          <FormItem.Hidden<Pick<ProfileFormValues, 'matesNumber'>>
            name="matesNumber"
            options={{
              required: '인원 수를 선택해주세요',
            }}
            defaultValue={matesNumber}
            valueProp={matesNumber}
          />
        </Container.FlexRow>
      </Container.FlexCol>
    </Container.FlexCol>
  );
}
