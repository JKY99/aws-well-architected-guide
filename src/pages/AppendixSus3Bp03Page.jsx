import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP03 — 작업에 적합한 컴퓨팅 및 스토리지 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드 특성에 맞는 최적의 컴퓨팅 및 스토리지 서비스를 선택합니다. 범용 인스턴스를 모든 용도에 사용하는 대신 컴퓨팅 집약적, 메모리 집약적, 또는 가속화 컴퓨팅이 필요한 워크로드에 맞는 특화된 인스턴스 타입을 사용하면 동일한 작업을 더 적은 에너지로 처리할 수 있습니다. AWS Graviton 프로세서와 같은 에너지 효율적인 하드웨어를 활용하는 것도 중요한 전략입니다.</p>
      <h2>원하는 결과</h2>
      <p>각 워크로드에 최적화된 컴퓨팅 및 스토리지 리소스를 사용하여 동일한 성능을 더 적은 에너지로 달성하고 탄소 발자국을 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드에 동일한 범용 인스턴스 타입을 사용합니다.</li>
        <li>머신러닝 추론 작업에 CPU 인스턴스를 사용하여 비효율적으로 처리합니다.</li>
        <li>실제 필요보다 훨씬 큰 인스턴스를 "안전 마진"으로 사용합니다.</li>
        <li>에너지 효율적인 최신 인스턴스 세대로 마이그레이션하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>작업에 최적화된 하드웨어 사용으로 에너지 효율이 크게 향상됩니다.</li>
        <li>AWS Graviton 기반 인스턴스는 x86 대비 최대 60% 낮은 에너지를 소비합니다.</li>
        <li>GPU 인스턴스로 머신러닝 워크로드를 더 빠르고 효율적으로 처리합니다.</li>
        <li>인프라 비용이 절감되고 성능이 동시에 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Compute Optimizer를 사용하여 워크로드에 적합한 인스턴스 타입을 추천받습니다.</li>
        <li>범용 워크로드에 AWS Graviton 기반 인스턴스(M7g, C7g, R7g 등)를 사용합니다.</li>
        <li>머신러닝 및 AI 워크로드에 AWS Inferentia나 Trainium 칩을 활용합니다.</li>
        <li>고성능 컴퓨팅에는 GPU 최적화 인스턴스(P4, G5 등)를 사용합니다.</li>
        <li>스토리지는 접근 패턴에 따라 SSD(gp3, io2)와 HDD(st1, sc1)를 구분하여 사용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 인스턴스 타입 최적화 권고</li>
        <li>AWS Graviton 프로세서 — 에너지 효율적인 ARM 기반 컴퓨팅</li>
        <li>AWS Inferentia / AWS Trainium — ML 추론 및 훈련 전용 칩</li>
        <li>Amazon EC2 인스턴스 타입 — 다양한 워크로드 최적화 인스턴스</li>
        <li>Amazon EBS — 워크로드별 최적화된 스토리지 볼륨</li>
      </ul>
      <PageNav />
    </article>
  );
}
