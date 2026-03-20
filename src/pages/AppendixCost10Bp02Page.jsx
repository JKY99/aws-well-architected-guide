import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST10-BP02 — 워크로드 정기 검토 및 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>정의된 프로세스에 따라 기존 워크로드를 정기적으로 검토하여 새로운 서비스 도입, 기존 서비스 교체, 워크로드 재아키텍처 기회를 찾습니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드가 정기적으로 검토되어 최신 AWS 서비스와 기능을 활용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 배포 후 워크로드를 재검토하지 않습니다.</li>
        <li>더 저렴한 새 서비스가 출시되어도 기존 서비스를 유지합니다.</li>
        <li>실제 사용량 데이터 없이 아키텍처 결정을 내립니다.</li>
        <li>검토를 수행하지만 실제 변경을 구현하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>AWS의 최신 서비스와 기능을 활용하여 비용을 절감합니다.</li>
        <li>오래된 아키텍처 패턴이 현대화됩니다.</li>
        <li>워크로드가 지속적으로 최적화됩니다.</li>
        <li>기술 부채가 줄어듭니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>정기 검토 실행: 정의된 주기에 따라 워크로드를 체계적으로 검토합니다.</li>
        <li>신규 서비스 평가: AWS What's New를 모니터링하고 관련 서비스를 평가합니다.</li>
        <li>현재 비용 기준점 설정: 변경 전 현재 비용을 측정하여 개선 효과를 정량화합니다.</li>
        <li>개선 구현: 분석 결과를 바탕으로 변경을 계획하고 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon CloudWatch</li>
        <li>AWS What's New</li>
      </ul>
      <PageNav />
    </article>
  );
}
