import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP03 — 경험에서 학습</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        성공과 실패 경험 모두에서 체계적으로 학습하고, 이를 조직 지식으로 전환합니다.
        같은 실수를 반복하지 않고, 성공 패턴을 확산시키는 조직이 지속적으로 발전합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 중요한 사건(장애, 보안 침해, 성공적인 출시)에 대해 사후 검토가 수행됩니다.
        학습 사항이 문서화되고 팀 전체에 공유되며, 프로세스 개선에 반영됩니다.
        조직이 성숙해질수록 같은 유형의 문제 발생 빈도가 감소합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 복구 후 사후 검토 없이 다음 업무로 넘어가는 경우</li>
        <li>사후 검토가 비난과 책임 추궁의 장이 되는 경우</li>
        <li>학습 사항이 특정 팀에만 공유되고 조직 전체로 확산되지 않는 경우</li>
        <li>같은 유형의 장애가 반복되어도 근본 원인이 해결되지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>반복적인 장애 패턴 제거로 신뢰성 향상</li>
        <li>팀의 집단 지식 축적으로 문제 해결 능력 향상</li>
        <li>심리적 안전감 향상으로 팀 성과 증대</li>
        <li>지속적 개선 문화 형성으로 장기적 경쟁력 확보</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>모든 주요 사건에 대해 비난 없는 사후 검토(Blameless Postmortem)를 수행합니다.</li>
        <li>사후 검토 결과를 표준 템플릿으로 문서화하고 내부에 공유합니다.</li>
        <li>근본 원인 분석(RCA)을 통해 표면적 원인이 아닌 시스템적 원인을 찾습니다.</li>
        <li>학습 사항을 런북, 플레이북, 아키텍처 결정 기록(ADR)에 반영합니다.</li>
        <li>월간 또는 분기별 "학습 공유" 세션을 운영합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager OpsCenter — 운영 이슈 추적 및 관리</li>
        <li>Amazon CloudWatch — 장애 기간 지표 분석</li>
        <li>AWS X-Ray — 분산 시스템 문제 추적 및 원인 분석</li>
      </ul>

      <PageNav />
    </article>
  );
}
