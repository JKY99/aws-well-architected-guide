import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP02 — 메트릭 정의 및 계산 (집계)</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드 구성 요소와 AWS 서비스 의존성에서 로그를 수집하고 쉽게 접근하고 처리할 수 있는
        중앙 위치에 게시합니다. 로그에서 워크로드 동작을 높은 수준에서 나타내는 집계 메트릭을 생성합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>워크로드 구성 요소와 AWS 서비스 의존성에서 로그를 수집하여 중앙 위치에 게시</li>
        <li>로그에 고정밀 및 정확한 타임스탬프 포함</li>
        <li>로그에 관련 처리 컨텍스트(추적 식별자, 사용자/계정 식별자, 원격 IP 주소) 포함</li>
        <li>높은 수준에서 워크로드 동작을 나타내는 집계 메트릭을 로그에서 생성</li>
        <li>집계된 로그를 쿼리하여 심층 인사이트를 얻고 실제 및 잠재적 문제 식별</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>컴퓨팅 인스턴스나 클라우드 서비스에서 관련 로그나 메트릭을 수집하지 않음</li>
        <li>비즈니스 KPI 관련 로그 및 메트릭 수집을 간과</li>
        <li>집계 및 상관 관계 없이 개별적으로 워크로드 원격 측정 데이터를 분석</li>
        <li>메트릭과 로그가 너무 빠르게 만료되어 추세 분석 및 반복되는 문제 식별 방해</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>더 많은 이상 징후를 감지하고 다양한 워크로드 구성 요소 간의 이벤트/메트릭 상관 관계 파악</li>
        <li>메트릭만으로는 자주 파악하기 어려운 로그에서 인사이트 도출</li>
        <li>대규모로 로그를 쿼리하여 더 빠르게 장애 원인 파악</li>
        <li>광범위하고 심층적인 관측 가능성을 통해 복원력 상태를 크게 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>원격 측정 데이터 소스 파악: OS 및 애플리케이션 런타임의 메트릭, 애플리케이션 및 클라우드 서비스 로그, AWS 서비스 로그(CloudFront, S3, ELB, API Gateway)</li>
        <li>메트릭 및 로그 수집: EC2 인스턴스에 CloudWatch Agent 사용, Lambda와 ECS는 CloudWatch Logs에 자동 게시</li>
        <li>차원으로 원격 측정 데이터 보강: 가용 영역, EC2 인스턴스 ID, 컨테이너 태스크 또는 Pod ID 추가</li>
        <li>집계 메트릭 생성: CloudWatch Logs Insights로 애플리케이션 로그에서 사용자 정의 메트릭 도출, CloudWatch Metrics Insights로 대규모 메트릭 쿼리</li>
        <li>Container Insights로 컨테이너화된 애플리케이션 메트릭 수집, Lambda Insights로 Lambda 함수 모니터링</li>
        <li>로그 보존 정책 정의: 역사적 데이터의 가치와 스토리지 비용의 균형 유지, 법적/계약적 요구사항 준수</li>
        <li>Amazon Athena를 사용하여 S3에 저장된 로그를 페타바이트 규모로 쿼리</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Logs (로그 수집 및 저장)</li>
        <li>Amazon CloudWatch Agent</li>
        <li>CloudWatch Logs Insights (로그 쿼리 및 분석)</li>
        <li>CloudWatch Metrics Insights (대규모 메트릭 쿼리)</li>
        <li>CloudWatch Container Insights</li>
        <li>CloudWatch Lambda Insights</li>
        <li>CloudWatch Logs Anomaly Detection</li>
        <li>Amazon Athena (S3 로그 쿼리)</li>
        <li>Amazon Managed Grafana</li>
        <li>Amazon Managed Service for Prometheus</li>
        <li>AWS Distro for OpenTelemetry</li>
      </ul>
      <PageNav />
    </article>
  );
}
