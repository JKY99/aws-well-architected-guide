import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP02 — 비용 및 사용량 알림 수신</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>예산 초과 또는 비용 이상 발생 시 자동으로 알림을 받아 신속하게 대응할 수 있는 체계를 구축합니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 이상 및 예산 초과를 조기에 감지하고 신속하게 대응할 수 있는 알림 체계를 갖춥니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사후 청구서 확인으로 예산 초과를 뒤늦게 인지</li>
        <li>예산 경보를 설정하지 않아 초과 지출 방치</li>
        <li>과도한 알림으로 알림 피로가 발생하여 중요한 경보를 무시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예산 초과 전 조기 경보로 비용 관리 선제 대응</li>
        <li>비용 이상 발생 시 빠른 원인 파악 및 문제 해결</li>
        <li>팀별 비용 책임 강화로 자율적 비용 관리 문화 조성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Budgets에서 서비스·계정·태그 단위로 예산을 설정하고 임계값 경보 구성</li>
        <li>AWS Cost Anomaly Detection을 활성화하여 머신러닝 기반 이상 감지 적용</li>
        <li>Amazon SNS 또는 이메일로 알림을 구성하여 담당자에게 즉시 전달</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Budgets</li>
        <li>AWS Cost Anomaly Detection</li>
        <li>Amazon SNS</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
