import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF07-BP03 — 성능 문제 대응 알림 수립</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>성능 저하 징후를 사전에 감지하는 경보를 설정하고, 자동화된 대응 액션을 구성하여 성능 SLA를 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>성능 문제 발생 시 신속하게 감지하고 자동으로 대응하는 체계를 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>임계값 기반 단순 경보만 사용</li>
        <li>사람에게만 알림 전송</li>
        <li>자동화된 대응 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조기 감지</li>
        <li>빠른 대응</li>
        <li>SLA 위반 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>다차원 CloudWatch 경보 설정</li>
        <li>Lambda로 자동 대응 액션 구성</li>
        <li>PagerDuty/SNS 연동으로 팀 알림</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Alarms</li>
        <li>Amazon SNS</li>
        <li>AWS Lambda</li>
        <li>AWS Systems Manager</li>
      </ul>
      <PageNav />
    </article>
  );
}
