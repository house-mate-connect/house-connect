import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import Container from '@/components/atoms/Container';
import SignUpProfileStepTitleTemplate from '@/components/templates/SignUpProfileStepTitle.template';
import Typography from '@/components/atoms/Typography';
import { SignupProfileStateSelector } from '@/stores/sign.store';
import IconButton from '@/components/molecules/IconButton';
import { IconType } from '@/types/icon.type';
import { SignUpType } from '@/types/signUp.type';
import FormItem from '@/components/molecules/FormItem';
import { ProfileFormValues } from '@/components/pages/SignUpProfile';
import { petDisplayData, smokeDisplayData } from '@/constants/signUpProfileData';

export default function SignUpProfile2_1Template() {
  const [smoking, setSmoking] = useRecoilState(
    SignupProfileStateSelector('smoking'),
  );
  const [pet, setPet] = useRecoilState(SignupProfileStateSelector('pet'));
  const { setValue } = useFormContext<ProfileFormValues>();

  useEffect(() => {
    setValue(
      'smoking',
      typeof smoking === 'boolean' ? `${smoking}` : undefined,
    );
    setValue('pet', pet);
  }, [smoking, pet, setValue]);

  const onClickSmokingType = (stateValue: SignUpType['smoking']) =>
    setSmoking(stateValue);
  const onClickPetType = (stateValue: SignUpType['pet']) => setPet(stateValue);

  return (
    <Container.FlexCol className="min-w-full px-2">
      <Container.FlexCol>
        <SignUpProfileStepTitleTemplate
          step="2-1"
          title="나의 라이프스타일은..."
        />
        <Typography.SubTitle1 className="text-brown">
          흡연 여부
        </Typography.SubTitle1>
        <Container.FlexRow
          style={{ width: `${(smokeDisplayData.length / 4) * 100}%` }}
          className="mb-[4.25rem] mt-11 justify-start gap-x-6"
        >
          {smokeDisplayData.map(({ displayValue, stateValue, iconType }) => (
            <IconButton.Outline
              key={displayValue}
              className="flex-1 gap-y-5 rounded-lg py-5"
              isActive={stateValue === smoking}
              iconType={iconType}
              direction="top"
              onClick={() => onClickSmokingType(stateValue)}
            >
              <Typography.P2 className="text-brown">
                {displayValue}
              </Typography.P2>
            </IconButton.Outline>
          ))}
          <FormItem.Hidden<Pick<ProfileFormValues, 'smoking'>>
            name="smoking"
            options={{
              required: '흡연 여부를 선택해주세요',
            }}
            defaultValue={
              typeof smoking === 'boolean' ? `${smoking}` : undefined
            }
          />
        </Container.FlexRow>
        <Typography.SubTitle1 className="text-brown">
          반려 동물
        </Typography.SubTitle1>
        <Container.FlexRow
          style={{ width: `${(petDisplayData.length / 4) * 100}%` }}
          className="mb-[4.25rem] mt-11 gap-x-6"
        >
          {petDisplayData.map(({ displayValue, stateValue, iconType }) => (
            <IconButton.Outline
              key={displayValue}
              className="flex-1 gap-y-5 rounded-lg py-5"
              isActive={stateValue === pet}
              iconType={iconType}
              direction="top"
              onClick={() => onClickPetType(stateValue)}
            >
              <Typography.P2 className="text-brown">
                {displayValue}
              </Typography.P2>
            </IconButton.Outline>
          ))}
          <FormItem.Hidden<Pick<ProfileFormValues, 'pet'>>
            name="pet"
            options={{
              required: '반려 동물 여부를 선택해주세요',
            }}
            defaultValue={pet}
          />
        </Container.FlexRow>
      </Container.FlexCol>
    </Container.FlexCol>
  );
}
