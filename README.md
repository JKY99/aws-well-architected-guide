# AWS Well-Architected Framework Guide

AWS Well-Architected Framework를 한국어로 번역하고 웹사이트로 제공하는 프로젝트입니다.

## Overview

[AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)는 클라우드 아키텍처를 설계할 때 고려해야 할 모범 사례와 핵심 원칙을 제공하는 문서입니다.

이 프로젝트는 해당 문서를 한국어로 번역하고, 모바일/PC 친화적인 정적 웹사이트로 제공합니다.

## 콘텐츠 현황

### 6 Pillars — 57개 질문, 307개 모범 사례(BP)

| 필라 | 질문 수 | BP 수 | 상태 |
|------|---------|-------|------|
| **Operational Excellence** (운영 우수성) | 11 | 68 | ✅ 완료 |
| **Security** (보안) | 11 | 63 | ✅ 완료 |
| **Reliability** (안정성) | 13 | 65 | ✅ 완료 |
| **Performance Efficiency** (성능 효율성) | 5 | 32 | ✅ 완료 |
| **Cost Optimization** (비용 최적화) | 11 | 50 | ✅ 완료 |
| **Sustainability** (지속 가능성) | 6 | 29 | ✅ 완료 |

- 모든 BP 페이지는 AWS 공식 문서(2024 최신 버전)를 기준으로 작성
- 각 BP 페이지에는 5개 표준 섹션 포함: 원하는 결과, 일반적인 안티패턴, 이점, 구현 지침, 관련 AWS 서비스
- BP 제목 및 위험 수준(높음/중간/낮음)은 AWS 원본과 정확히 일치하도록 검증 완료

### 페이지 구조

- **질문 페이지** (57개): 각 필라의 질문별 개요 및 BP 목록
- **BP 상세 페이지** (307개): 개별 모범 사례의 상세 내용
- **프레임워크 페이지**: 소개, 설계 원칙, 정의, 결론 등

## Tech Stack

- React 19 + Vite
- React Router DOM
- CSS (DocContent.css)

## Development

### Docker (권장)

```bash
# 서버 시작
docker compose up

# 백그라운드 실행
docker compose up -d

# 서버 중지
docker compose down
```

`http://localhost:5173`에서 접근 가능. 소스 변경 시 HMR 자동 반영.

### 로컬

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

빌드 결과물(`dist/`)은 어떤 정적 웹 서버에도 배포 가능합니다.

## Project Structure

```
src/
  components/   # 공통 컴포넌트 (Header, Sidebar, PageNav 등)
  pages/        # 각 문서 페이지 (365개 JSX 파일)
  data/         # 네비게이션 데이터 (pageOrder.js)
  styles/       # 전역 스타일
  App.jsx       # 라우팅 설정
```

## 검증 상태

모든 콘텐츠는 AWS 공식 문서와 4차례의 자동 검증을 통해 다음 항목이 확인되었습니다:

- BP 제목: AWS 영문 원본의 정확한 한국어 번역
- 위험 수준: AWS 원본과 일치 (High→높음, Medium→중간, Low→낮음)
- 섹션 구조: 모든 BP 페이지에 5개 표준 섹션 포함
- 라우트 정합성: App.jsx 라우트 ↔ pageOrder.js ↔ 질문 페이지 링크 일치
- BP 수: 각 질문별 BP 개수가 AWS 원본과 일치
