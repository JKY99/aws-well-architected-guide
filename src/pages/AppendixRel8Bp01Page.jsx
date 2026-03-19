import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL08-BP01 — 자동 백업 활성화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>관리형 AWS 서비스의 자동 백업 기능을 활성화하여 데이터 손실 위험을 최소화하고 복구 가능성을 보장합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 데이터가 자동으로 정기 백업되어 복구 가능한 상태를 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>자동 백업 비활성화</li>
        <li>수동 백업에만 의존</li>
        <li>백업 실패 알림 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터 보호 자동화</li>
        <li>인적 오류 방지</li>
        <li>RPO 달성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>RDS 자동 백업 활성화(보존 기간 설정)</li>
        <li>DynamoDB 지속적 백업 활성화</li>
        <li>EBS 스냅샷 자동화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon RDS (자동 백업)</li>
        <li>Amazon DynamoDB (Point-in-Time Recovery)</li>
        <li>AWS Backup</li>
        <li>Amazon EBS</li>
      </ul>
      <PageNav />
    </article>
  );
}
