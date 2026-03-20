import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP02 — 영향이 가장 적은 인스턴스 유형 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        에너지 효율성 향상을 활용하기 위해 새로운 인스턴스 유형을 지속적으로 모니터링하고 사용합니다.
        에너지 소비 단위당 최상의 성능을 제공하는 인스턴스 유형을 선택하고 전환하여 환경적 영향과
        운영 비용을 모두 줄입니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        클라우드 워크로드의 환경적 영향을 줄이고 효율적인 리소스 할당을 통한 운영 비용을 낮춥니다.
        에너지 소비 단위당 성능 효율을 개선하고 워크로드 요구사항에 맞게 최적화된 리소스 소비를 달성합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>한 가지 인스턴스 패밀리만 사용하는 경우</li>
        <li>x86 인스턴스만 사용하는 경우</li>
        <li>EC2 Auto Scaling 구성에 단일 인스턴스 유형만 지정하는 경우</li>
        <li>설계되지 않은 용도에 인스턴스를 사용하는 경우(예: 메모리 집약적 워크로드에 컴퓨팅 최적화 인스턴스)</li>
        <li>새 인스턴스 유형을 정기적으로 평가하지 않는 경우</li>
        <li>AWS Compute Optimizer 등 적정 규모 도구의 권장 사항을 확인하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드의 환경적 영향 크게 감소</li>
        <li>효율적인 리소스 할당을 통한 비용 절감</li>
        <li>에너지 소비 단위당 성능 향상</li>
        <li>테스트 및 최적화를 위한 클라우드 민첩성 활용</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS What's New를 구독하여 최신 기술 및 인스턴스 정보를 파악합니다.</li>
        <li>EC2에서 와트당 최상의 성능을 제공하는 AWS Graviton 기반 인스턴스를 학습합니다.</li>
        <li>워크로드에 대한 새 기능·인스턴스 평가 프로세스를 정의합니다.</li>
        <li>더 큰 유연성을 위해 가변 vCPU와 메모리를 지원하도록 워크로드를 수정합니다.</li>
        <li>ML 워크로드에는 AWS Trainium(학습), AWS Inferentia(추론, 와트당 최대 50% 향상 성능) 등 전용 하드웨어를 사용합니다.</li>
        <li>Amazon SageMaker AI Inference Recommender를 사용하여 ML 엔드포인트 적정 규모를 조정합니다.</li>
        <li>스파이크 워크로드에는 버스터블 성능 인스턴스, 상태 비저장·내결함성 워크로드에는 Amazon EC2 스팟 인스턴스를 사용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Graviton 기반 인스턴스 — EC2에서 와트당 최상의 성능</li>
        <li>AWS Trainium — ML 학습 전용 하드웨어</li>
        <li>AWS Inferentia — ML 추론 전용 하드웨어(와트당 최대 50% 향상)</li>
        <li>Amazon SageMaker AI Inference Recommender — ML 엔드포인트 적정 규모 조정</li>
        <li>AWS Compute Optimizer — 적정 규모 권장 사항</li>
        <li>Amazon CloudWatch — CPU 활용률 등 지표 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
