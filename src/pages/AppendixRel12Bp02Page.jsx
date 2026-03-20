import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel12Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL12-BP02 — 사후 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 동일한 장애가 반복 발생하고 시스템이 개선되지 않습니다.</p>
      </div>
      <p>
        장애 발생 후 근본 원인 분석(RCA, Root Cause Analysis)과 사후 분석(Post-Incident Review)을
        수행하여 재발 방지 조치를 식별하고 구현합니다. 비난 없는 사후 분석(blameless postmortem)
        문화를 통해 팀원들이 솔직하게 정보를 공유할 수 있도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 중요 장애에 대해 사후 분석이 수행되고, 식별된 개선 항목이 추적 및 구현됩니다.
        동일한 장애가 반복되지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 복구 후 즉시 다음 업무로 넘어가고 사후 분석을 수행하지 않는 경우</li>
        <li>특정 개인을 탓하는 문화로 인해 팀원들이 정보 공유를 꺼리는 경우</li>
        <li>사후 분석에서 개선 항목을 식별했지만 우선순위를 부여하지 않아 실제로 구현되지 않는 경우</li>
        <li>표면적인 원인만 분석하고 근본 원인(5 Whys)을 파악하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>동일한 장애 재발 방지</li>
        <li>시스템의 지속적인 개선</li>
        <li>팀의 장애 대응 역량 향상</li>
        <li>비난 없는 문화로 심리적 안전감 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>중요 장애(P1, P2) 발생 후 24-48시간 내에 사후 분석을 수행합니다.</li>
        <li>장애 타임라인, 영향 범위, 근본 원인, 재발 방지 조치를 포함한 사후 분석 문서를 작성합니다.</li>
        <li>5 Whys 기법을 사용하여 표면적 원인이 아닌 근본 원인을 파악합니다.</li>
        <li>개선 항목에 우선순위와 담당자, 완료 기한을 명확히 지정합니다.</li>
        <li>사후 분석 결과를 팀 전체와 공유하여 조직 학습을 촉진합니다.</li>
        <li>개선 항목의 구현 진행 상황을 정기적으로 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager OpsCenter — 운영 이슈 추적 및 관리</li>
        <li>AWS CloudTrail — 장애 전후 API 호출 이력 검토</li>
        <li>Amazon CloudWatch Logs Insights — 장애 시점 로그 분석</li>
        <li>AWS X-Ray — 장애 요청 경로 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
