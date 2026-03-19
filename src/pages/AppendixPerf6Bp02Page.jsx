import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF06-BP02 — 정기적인 검토 프로세스 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드 성능을 정기적으로 검토하는 프로세스를 수립하여 성능 저하, 비효율성, 개선 기회를 체계적으로 발견합니다.</p>
      <h2>원하는 결과</h2>
      <p>정기적인 성능 검토로 지속적인 성능 최적화를 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 검토 프로세스 없음</li>
        <li>문제 발생 시에만 검토 수행</li>
        <li>성능 개선 담당자 미지정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 저하 사전 발견</li>
        <li>지속적인 최적화 실현</li>
        <li>비용 절감</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>분기별 성능 검토 일정 수립</li>
        <li>Well-Architected Review 활용</li>
        <li>성능 KPI 대시보드 구성</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>Amazon CloudWatch Dashboards</li>
        <li>AWS Trusted Advisor</li>
      </ul>
      <PageNav />
    </article>
  );
}
