# AWS Well-Architected Framework Guide

AWS Well-Architected Framework를 정리하고 가이드하는 프로젝트입니다.

## Overview

[AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)는 클라우드 아키텍처를 설계할 때 고려해야 할 모범 사례와 핵심 원칙을 제공하는 문서입니다.

이 프로젝트는 해당 문서를 한국어로 번역하고, 모바일/PC 친화적인 정적 웹사이트로 제공합니다.

### 6 Pillars

1. **Operational Excellence** (운영 우수성)
2. **Security** (보안)
3. **Reliability** (안정성)
4. **Performance Efficiency** (성능 효율성)
5. **Cost Optimization** (비용 최적화)
6. **Sustainability** (지속 가능성)

## Tech Stack

- React (Vite)
- React Router DOM
- CSS Modules

## Development

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
  components/   # 공통 컴포넌트 (Header, Sidebar, Footer 등)
  pages/        # 각 문서 페이지
  data/         # 네비게이션, 콘텐츠 데이터
  styles/       # 전역 스타일
```
