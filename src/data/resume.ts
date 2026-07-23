import type { Lang } from '../i18n/ui';

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary?: string;
  points?: string[];
}
export interface EduItem {
  name: string;
  detail: string;
  period: string;
}
export interface CertItem {
  name: string;
  date: string;
}
export interface ResumeData {
  headline: string;
  contacts: { label: string; href: string }[];
  intro: string[];
  expTitle: string;
  eduTitle: string;
  certTitle: string;
  experience: Experience[];
  education: EduItem[];
  certifications: CertItem[];
}

// ⚠️ 아래는 편집용 예시 데이터입니다. 실제 이력/링크로 교체하세요.
export const resume: Record<Lang, ResumeData> = {
  ko: {
    headline: '도움이 되는 걸 만들고 싶은 개발자, Sean이에요.',
    contacts: [
      { label: 'GitHub', href: 'https://github.com/seandoesdev' },
      { label: 'Email', href: 'mailto:you@example.com' },
    ],
    intro: [
      '풍부한 기술보다, 지금 문제를 푸는 데 필요한 최소한의 것을 좋아합니다.',
      '빠르게 만들고 고치는 과정에서 배운 것을 기록으로 남깁니다.',
    ],
    expTitle: 'Work Experience',
    eduTitle: 'Education',
    certTitle: 'Certifications',
    experience: [
      {
        company: '회사명',
        role: '백엔드 개발자',
        period: '2023.01 — now',
        summary: '무슨 일을 했는지 한두 문장으로 요약합니다.',
        points: ['핵심 성과나 역할 1', '핵심 성과나 역할 2'],
      },
      {
        company: '이전 회사',
        role: '개발자',
        period: '2021.03 — 2022.12',
        points: ['핵심 성과나 역할 1'],
      },
    ],
    education: [{ name: '학교명', detail: '전공 · 졸업', period: '2015 — 2019' }],
    certifications: [{ name: '정보처리기사', date: '2020.11' }],
  },
  en: {
    headline: 'I build things that help — hi, I’m Sean.',
    contacts: [
      { label: 'GitHub', href: 'https://github.com/seandoesdev' },
      { label: 'Email', href: 'mailto:you@example.com' },
    ],
    intro: [
      'I prefer the smallest set of tools that solves the problem in front of me, over a big stack.',
      'I build fast, fix fast, and write down what I learn along the way.',
    ],
    expTitle: 'Work Experience',
    eduTitle: 'Education',
    certTitle: 'Certifications',
    experience: [
      {
        company: 'Company',
        role: 'Backend Engineer',
        period: '2023.01 — now',
        summary: 'A one or two sentence summary of what you did here.',
        points: ['Key result or responsibility 1', 'Key result or responsibility 2'],
      },
      {
        company: 'Previous Company',
        role: 'Engineer',
        period: '2021.03 — 2022.12',
        points: ['Key result or responsibility 1'],
      },
    ],
    education: [{ name: 'University', detail: 'Major · Graduated', period: '2015 — 2019' }],
    certifications: [{ name: 'Some Certification', date: '2020.11' }],
  },
};
