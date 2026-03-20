import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP01 — 상세 정보 소스 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>향상된 비용 및 사용량 데이터 분석과 투명성을 위한 비용 관리 및 보고 도구를 설정합니다. 워크로드가 비용과 사용량 추적 및 분리를 용이하게 하는 로그 항목을 생성하도록 구성합니다.</p>
      <h2>원하는 결과</h2>
      <p>비용 및 사용량 데이터에 대한 상세하고 정확한 가시성을 확보합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 및 사용량 데이터의 세부 정보가 부족합니다.</li>
        <li>시간별 세분화 없이 월별 비용만 추적합니다.</li>
        <li>리소스 수준의 비용 귀속이 불가능합니다.</li>
        <li>비용 데이터 분석 도구가 충분히 설정되지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시간별 세분화로 비용 급증 원인을 빠르게 파악합니다.</li>
        <li>리소스 수준의 상세한 비용 귀속이 가능합니다.</li>
        <li>비용 최적화 기회를 더 정확하게 식별합니다.</li>
        <li>비용 이상 징후를 신속하게 감지합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Data Exports 구성: CUR 2.0을 사용하여 시간별 세분화된 비용 및 사용량 데이터를 내보냅니다.</li>
        <li>Cost Explorer 시간별 설정: 과거 14일의 시간별 세분화 데이터를 위해 시간별 및 리소스 수준 데이터를 활성화합니다.</li>
        <li>컨테이너 비용 할당: ECS 또는 EKS 워크로드의 경우 분할 비용 할당 데이터를 활성화합니다.</li>
        <li>애플리케이션 로깅: 비용과 매핑할 수 있는 비즈니스 성과 로그를 애플리케이션에서 생성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost and Usage Report</li>
        <li>AWS Data Exports</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon S3</li>
        <li>Amazon Athena</li>
        <li>Amazon QuickSight</li>
      </ul>
      <PageNav />
    </article>
  );
}
