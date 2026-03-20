import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF01-BP01 — 사용 가능한 클라우드 서비스 및 기능 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>사용 가능한 클라우드 서비스와 기능을 지속적으로 파악하고 이해합니다. AWS가 제공하는 다양한 서비스와 최신 기능을 숙지하여 워크로드 성능을 향상시킬 기회를 적극적으로 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>AWS 서비스와 기능에 대한 깊은 이해를 바탕으로 워크로드에 적합한 최신 서비스와 기능을 선택하고 활용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>익숙한 서비스만 반복 사용하고 새로운 서비스 검토하지 않음</li>
        <li>AWS 릴리스 노트와 공지사항을 정기적으로 검토하지 않음</li>
        <li>기존 서비스로 해결하기 어려운 문제를 새로운 서비스로 해결할 수 있음에도 시도하지 않음</li>
        <li>팀 내 AWS 서비스 지식을 공유하지 않아 중복 학습 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최신 AWS 서비스 활용으로 성능 및 비용 개선 기회 포착</li>
        <li>더 나은 아키텍처 결정을 위한 폭넓은 선택지 확보</li>
        <li>AWS가 제공하는 관리형 서비스 활용으로 운영 부담 감소</li>
        <li>혁신적인 기능 조기 도입으로 경쟁 우위 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS What's New 페이지를 정기적으로 구독하여 새로운 기능 파악</li>
        <li>AWS re:Invent, AWS Summit 등 컨퍼런스를 통해 최신 서비스 학습</li>
        <li>AWS Well-Architected Labs에서 실습을 통해 서비스 경험 축적</li>
        <li>팀 내 AWS 학습 문화 조성 및 지식 공유 세션 운영</li>
        <li>AWS Skill Builder로 체계적인 학습 계획 수립</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 아키텍처 검토 및 개선 권고</li>
        <li>AWS Trusted Advisor — 모범 사례 점검 및 권고</li>
        <li>AWS Well-Architected Labs — 실습 기반 학습 리소스</li>
        <li>AWS Skill Builder — 체계적인 AWS 교육 플랫폼</li>
      </ul>
      <PageNav />
    </article>
  );
}
