import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP05 — 패치 관리 수행</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        운영 체제, 미들웨어, 라이브러리의 보안 패치를 정기적으로 적용합니다.
        패치되지 않은 시스템은 알려진 취약점을 통한 공격의 주요 대상이 됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 시스템이 정해진 기간 내에 보안 패치를 적용받습니다.
        패치 상태가 중앙에서 추적되고 보고됩니다.
        긴급 보안 패치는 정상 패치 주기보다 빠르게 적용됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>패치 적용이 비정기적이거나 사람이 기억에 의존하는 경우</li>
        <li>패치 적용 전 테스트 없이 운영 환경에 직접 패치하는 경우</li>
        <li>일부 시스템은 패치되고 일부는 누락되는 경우</li>
        <li>긴급 보안 취약점에도 느린 패치 프로세스를 적용하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>알려진 취약점을 통한 침해 위험 감소</li>
        <li>규정 준수 요건(보안 패치 적시 적용) 충족</li>
        <li>자동화된 패치 관리로 운영 부담 감소</li>
        <li>패치 상태 가시성 향상으로 감사 대응 용이</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager Patch Manager로 패치 기준선을 정의하고 자동 패치를 스케줄링합니다.</li>
        <li>패치를 먼저 비운영 환경에 적용하여 영향을 검증합니다.</li>
        <li>패치 규정 준수 보고서를 정기적으로 검토합니다.</li>
        <li>CVSS 점수가 높은 긴급 취약점에 대한 신속 패치 절차를 별도로 수립합니다.</li>
        <li>컨테이너 이미지도 기반 이미지(base image) 취약점을 정기적으로 스캔하고 업데이트합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Patch Manager — 자동화된 패치 관리</li>
        <li>Amazon Inspector — EC2 및 컨테이너 취약점 스캔</li>
        <li>AWS Security Hub — 패치 규정 준수 통합 뷰</li>
        <li>Amazon ECR 이미지 스캔 — 컨테이너 이미지 취약점 감지</li>
      </ul>

      <PageNav />
    </article>
  );
}
