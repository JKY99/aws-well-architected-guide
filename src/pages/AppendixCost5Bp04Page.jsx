import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP04 — 팀에 비용 데이터 리포트</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>정기적으로 팀별 비용 데이터를 공유하여 각 팀이 자신의 클라우드 지출을 인식하고 최적화를 주도할 수 있도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>팀별 비용 인식을 높여 자율적인 비용 최적화 문화를 조성하고 전사적 비용 효율성을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>재무팀만 비용 데이터를 보유하여 개발팀의 비용 인식 부재</li>
        <li>팀별 비용 세분화 없이 전사 합산 데이터만 공유</li>
        <li>비용 최적화에 대한 인센티브나 유인이 없어 동기 부족</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>팀별 비용 책임 문화 형성으로 자율적 최적화 촉진</li>
        <li>각 팀이 자신의 지출을 직접 최적화하는 분산형 비용 관리</li>
        <li>팀 간 비용 비교를 통한 모범 사례 확산</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Cost Explorer 또는 CUR 기반으로 주간·월간 팀별 비용 리포트 자동 생성 및 발송</li>
        <li>Slack·이메일 통합으로 팀별 비용 알림을 업무 도구에서 바로 확인</li>
        <li>팀별 비용 절감 목표를 KPI로 설정하고 달성률을 정기 보고</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Budgets</li>
        <li>AWS Cost and Usage Report (CUR)</li>
        <li>Amazon QuickSight</li>
      </ul>
      <PageNav />
    </article>
  );
}
