import { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import {
  Container,
  GoldLine,
  Section,
  SectionLabel,
  SectionSubtitle,
  SectionTitle,
} from '../../styles/shared';

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  phone: '',
  service: '',
  message: '',
};

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
  margin-top: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.2fr;
    gap: 80px;
  }
`;

const ContactInfo = styled(motion.div)``;

const InfoBlock = styled.div`
  margin-bottom: 40px;
`;

const InfoLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 8px;
`;

const InfoValue = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const InfoLink = styled.a`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const HourRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  span:last-child {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FormWrapper = styled(motion.form)`
  padding: 48px 40px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.gold},
      transparent
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 32px 24px;
  }
`;

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 32px;
`;

const FieldGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 8px;
`;

const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 2px;
  outline: none;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDim};
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.gold};
  }
`;

const Select = styled.select<{ $hasError?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M3 5l3 3 3-3' stroke='%239a9488' fill='none' stroke-width='1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.gold};
  }

  option {
    background: ${({ theme }) => theme.colors.bgCard};
  }
`;

const Textarea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.border};
  border-radius: 2px;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDim};
  }

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.gold};
  }
`;

const ErrorText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 6px;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 18px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors.goldDark}
  );
  border-radius: 2px;
  margin-top: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 24px;
  gap: 16px;

  svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.success};
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const serviceOptions = [
  'Стрижка и укладка',
  'Маникюр / Педикюр',
  'Косметология',
  'Макияж',
  'SPA-ритуал',
  'Брови и ресницы',
];

export const Contact = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!form.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) {
      newErrors.phone = 'Некорректный номер телефона';
    }
    if (!form.service) newErrors.service = 'Выберите услугу';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1200);
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>Контакты</SectionLabel>
          <SectionTitle>Запишитесь на визит</SectionTitle>
          <GoldLine />
          <SectionSubtitle>
            Оставьте заявку — мы свяжемся с вами в течение 30 минут и подберём
            удобное время.
          </SectionSubtitle>
        </motion.div>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <InfoBlock>
              <InfoLabel>Адрес</InfoLabel>
              <InfoValue>
                Москва, ул. Тверская, 15
                <br />
                БЦ «Палладиум», 3 этаж
              </InfoValue>
            </InfoBlock>

            <InfoBlock>
              <InfoLabel>Телефон</InfoLabel>
              <InfoLink href="tel:+74951234567">+7 (495) 123-45-67</InfoLink>
            </InfoBlock>

            <InfoBlock>
              <InfoLabel>Email</InfoLabel>
              <InfoLink href="mailto:hello@lumiere.ru">
                hello@lumiere.ru
              </InfoLink>
            </InfoBlock>

            <InfoBlock>
              <InfoLabel>Часы работы</InfoLabel>
              <WorkingHours>
                <HourRow>
                  <span>Пн — Пт</span>
                  <span>10:00 — 21:00</span>
                </HourRow>
                <HourRow>
                  <span>Суббота</span>
                  <span>10:00 — 20:00</span>
                </HourRow>
                <HourRow>
                  <span>Воскресенье</span>
                  <span>11:00 — 19:00</span>
                </HourRow>
              </WorkingHours>
            </InfoBlock>
          </ContactInfo>

          <FormWrapper
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessMessage
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 24l7 7 13-14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4>Заявка отправлена!</h4>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
                  <SubmitButton
                    type="button"
                    onClick={() => setSubmitted(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ maxWidth: 240, marginTop: 16 }}
                  >
                    Новая заявка
                  </SubmitButton>
                </SuccessMessage>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <FormTitle>Форма записи</FormTitle>
                  <FormSubtitle>
                    Заполните поля — это займёт меньше минуты
                  </FormSubtitle>

                  <FieldGroup>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Анна Иванова"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      $hasError={!!errors.name}
                    />
                    {errors.name && <ErrorText>{errors.name}</ErrorText>}
                  </FieldGroup>

                  <FieldGroup>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      $hasError={!!errors.phone}
                    />
                    {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                  </FieldGroup>

                  <FieldGroup>
                    <Label htmlFor="service">Услуга *</Label>
                    <Select
                      id="service"
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      $hasError={!!errors.service}
                    >
                      <option value="">Выберите услугу</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Select>
                    {errors.service && <ErrorText>{errors.service}</ErrorText>}
                  </FieldGroup>

                  <FieldGroup>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Пожелания, удобное время..."
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                    />
                  </FieldGroup>

                  <SubmitButton
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {loading ? 'Отправка...' : 'Отправить заявку'}
                  </SubmitButton>
                </motion.div>
              )}
            </AnimatePresence>
          </FormWrapper>
        </ContactGrid>
      </Container>
    </Section>
  );
};
