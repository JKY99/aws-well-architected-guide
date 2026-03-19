import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP01 — 지출 및 사용량 보고 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>AWS 비용 및 사용량 데이터를 수집하고 가시화하는 보고 체계를 구성하여 지출 패턴을 지속적으로 파악합니다.</p>
      <h2>원하는 결과</h2>
      <p>실시간에 가까운 비용 가시성으로 지출 패턴의 빠른 파악과 이상 감지를 실현합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>월말 청구서만 확인하여 지출 문제를 사후에 인지</li>
        <li>비용 대시보드가 없어 전체 지출 현황 파악 불가</li>
        <li>서비스별 비용 드릴다운이 불가능한 단순 집계 보고</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>조기 비용 이상 감지로 예산 초과 방지</li>
        <li>지출 트렌드 파악을 통한 예산 계획 정확도 향상</li>
        <li>예산 준수 여부를 지속적으로 모니터링</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Cost Explorer 대시보드를 구성하여 서비스·계정·태그별 비용을 시각화</li>
        <li>AWS Cost and Usage Report(CUR)를 S3에 저장하고 Amazon Athena로 상세 분석 쿼리 수행</li>
        <li>Amazon QuickSight를 활용하여 팀별 맞춤형 비용 대시보드 구축</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost Explorer</li>
        <li>AWS Cost and Usage Report (CUR)</li>
        <li>Amazon Athena</li>
        <li>Amazon QuickSight</li>
      </ul>
      <PageNav />
    </article>
  );
}
